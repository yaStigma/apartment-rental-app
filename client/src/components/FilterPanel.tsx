import { useState } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fetchAllApartments } from "@/redux/apartment/operations";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import type { ApartmentFilters } from "@/types/apartment";
export default function FilterPanel() {
  const dispatch = useAppDispatch();
  const [sortOrder, setSortOrder] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [rooms, setRooms] = useState("");

  const handleApply = () => {
    const params: ApartmentFilters = {};

    if (sortOrder) {
      params.sortOrder = sortOrder as "asc" | "desc";
    }
    let hasInvalid = false;
    const min = parseInt(priceMin);
    if (!isNaN(min)) {
      if (min < 0) {
        toast.error("Minimum price must be ≥ 0");
        hasInvalid = true;
      } else {
        params.priceMin = min;
      }
    }

    const max = parseInt(priceMax);
    if (!isNaN(max)) {
      if (max < 0) {
        toast.error("Maximum price must be ≥ 0");
        hasInvalid = true;
      } else {
        params.priceMax = max;
      }
    }

    const numRooms = parseInt(rooms);
    if (!isNaN(numRooms)) {
      if (numRooms <= 0) {
        toast.error("Number of rooms must be > 0");
        hasInvalid = true;
      } else {
        params.numberOfRooms = numRooms;
      }
    }

    if (hasInvalid) return;
    console.log("params:", params);
    dispatch(fetchAllApartments(params));
  };
  return (
    <div className="flex gap-4 mr-4 items-end">
      <div>
        <p className="text-xs mb-0.5">Price sort:</p>
        <div className="filter">
          <input
            className="btn filter-reset btn-xs"
            type="radio"
            name="priceSort"
            aria-label="All"
            checked={sortOrder === ""}
            onChange={() => setSortOrder("")}
          />
          <input
            className="btn btn-xs"
            type="radio"
            name="priceSort"
            aria-label="max-min"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          <input
            className="btn btn-xs"
            type="radio"
            name="priceSort"
            aria-label="min-max"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
        </div>
      </div>

      <div>
        <p className="text-xs mb-0.5">Price $:</p>
        <div className="flex">
          <input
            type="number"
            min="0"
            placeholder="min"
            className="input input-xs w-20"
            value={priceMin}
            onChange={e => setPriceMin(e.target.value)}
          />
          -
          <input
            type="number"
            min="0"
            placeholder="max"
            className="input input-xs w-20"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value)}
          />
        </div>
      </div>

      <div className="w-25">
        <p className="text-xs">Rooms:</p>
        <select
          defaultValue=""
          className="select select-xs"
          value={rooms}
          onChange={e => setRooms(e.target.value)}
        >
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <button onClick={handleApply} className="btn btn-sm btn-neutral ">
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}
