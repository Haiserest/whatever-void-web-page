import "./page.css";

import { useMemo, useState } from "react";
import { Badge, Button, Group, Stack, Text, TextInput } from "@mantine/core";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  SuitcaseRollingIcon,
} from "@phosphor-icons/react";
import { useTravelData } from "../../hooks/travel/use-travel";
import { useDrawerHook } from "../../components/drawer/drawer-hook";
import { useGoogleSheet } from "../../libs/google-sheet/google-sheet";

import Table from "../../components/table/table";
import Drawer from "../../components/drawer/drawer";
import Loader from "../../components/loader/loader";

const TravelPage = () => {
  const { dataTable, onUpdateDataTable } = useTravelData();
  const { open, onOpen, onClose } = useDrawerHook();
  const [search, setSearch] = useState("");
  const [sheetUrl, setSheetUrl] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheetError, setSheetError] = useState("");
  const [travelPlan, setTravelPlan] = useState([]);

  useGoogleSheet({
    isRead: isReading,
    url: sheetUrl,
    onLoad: setLoading,
    onSuccess: onSheetSuccess,
    onFailed: onSheetFailed,
  });

  const filteredData = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    if (!query) return dataTable;

    return dataTable.filter((item) =>
      [item.name, item.tags?.join(" "), item.description, item.location]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query),
    );
  }, [dataTable, search]);

  const columns = [
    { key: "name", label: "Place" },
    {
      key: "tags",
      label: "Tags",
      render: (tags = []) => (
        <Group gap={4} wrap="wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
      ),
    },
    { key: "description", label: "Description" },
    {
      key: "action",
      label: "",
      render: (_, item) => {
        const isAdded = travelPlan.some((place) => place.key === item.key);
        return (
          <Button
            size="xs"
            variant={isAdded ? "light" : "default"}
            disabled={isAdded}
            onClick={() => onAddToPlan(item)}
          >
            {isAdded ? "Added" : "Add to plan"}
          </Button>
        );
      },
    },
  ];

  return (
    <div className="travel-page">
      <div className="travel-page-header">
        <TextInput
          aria-label="Search destinations"
          className="travel-page-search"
          leftSection={<MagnifyingGlassIcon size={18} />}
          placeholder="Search places, tags, or locations"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Button
          className="travel-page-plan-button"
          leftSection={<SuitcaseRollingIcon size={18} />}
          onClick={onOpen}
        >
          Travel plan
          <span className="travel-page-plan-count">{travelPlan.length}</span>
        </Button>
      </div>
      <section className="travel-page-source">
        <div className="travel-page-source-copy">
          <Text fw={600}>Destination data</Text>
          <Text c="dimmed" size="sm">
            Connect a published Google Sheets CSV to load your places.
          </Text>
        </div>
        <Group
          className="travel-page-source-controls"
          align="end"
          wrap="nowrap"
        >
          <TextInput
            aria-label="Google Sheet CSV URL"
            className="travel-page-sheet-url"
            placeholder="Paste a published CSV URL"
            value={sheetUrl}
            onChange={(event) => setSheetUrl(event.currentTarget.value)}
            disabled={loading}
          />
          <Button
            onClick={onLoadSheet}
            loading={loading}
            disabled={!sheetUrl.trim()}
          >
            Load places
          </Button>
        </Group>
      </section>
      {sheetError && (
        <Text className="travel-page-error" c="red" size="sm" role="alert">
          {sheetError}
        </Text>
      )}
      <section className="travel-page-results">
        <div className="travel-page-results-header">
          <div>
            <Text fw={600}>Explore destinations</Text>
            <Text c="dimmed" size="sm">
              Search the list and add places to your travel plan.
            </Text>
          </div>
          <Badge variant="light" size="lg">
            {filteredData.length}{" "}
            {filteredData.length === 1 ? "place" : "places"}
          </Badge>
        </div>
        <Loader loading={loading}>
          <div className="travel-page-table">
            {filteredData.length > 0 ? (
              <Table columns={columns} dataSource={filteredData} />
            ) : (
              <div className="travel-page-empty">
                <MapPinIcon size={30} weight="light" />
                <Text fw={500}>
                  {dataTable.length
                    ? "No places found"
                    : "Your destination list is empty"}
                </Text>
                <Text c="dimmed" size="sm">
                  {dataTable.length
                    ? "Try another search term."
                    : "Load a Google Sheet CSV to see places here."}
                </Text>
              </div>
            )}
          </div>
        </Loader>
      </section>
      <Drawer
        open={open}
        onClose={onClose}
        title="Travel plan"
        position="right"
      >
        <Stack className="travel-plan-list" gap="sm">
          <Text c="dimmed" size="sm">
            {travelPlan.length
              ? `${travelPlan.length} ${travelPlan.length === 1 ? "place" : "places"} in your plan`
              : "Add destinations from the list to start planning."}
          </Text>
          {travelPlan.length ? (
            travelPlan.map((item) => (
              <div className="travel-plan-item" key={item.key}>
                <div>
                  <Text fw={600}>{item.name}</Text>
                  {item.location && (
                    <Text c="dimmed" size="sm">
                      {item.location}
                    </Text>
                  )}
                </div>
                <Button
                  size="xs"
                  variant="subtle"
                  color="red"
                  onClick={() => onRemoveFromPlan(item.key)}
                >
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <Text c="dimmed">No places added to your travel plan yet.</Text>
          )}
          <Button className="travel-plan-generate" disabled fullWidth>
            Generate route (coming soon)
          </Button>
        </Stack>
      </Drawer>
    </div>
  );

  function onLoadSheet() {
    setSheetError("");
    setIsReading(true);
  }

  function onSheetSuccess({ data }) {
    onUpdateDataTable({ data });
    setIsReading(false);
  }

  function onSheetFailed() {
    setSheetError("Could not load the sheet. Check the published CSV URL.");
    setIsReading(false);
  }

  function onAddToPlan(item) {
    setTravelPlan((currentPlan) =>
      currentPlan.some((place) => place.key === item.key)
        ? currentPlan
        : [...currentPlan, item],
    );
  }

  function onRemoveFromPlan(key) {
    setTravelPlan((currentPlan) =>
      currentPlan.filter((item) => item.key !== key),
    );
  }
};

export default TravelPage;
