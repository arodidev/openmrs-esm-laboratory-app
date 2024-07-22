import { createGlobalStore, User, useStore } from "@openmrs/esm-framework";

export interface filterDateType {
  date: string | Date;
}

export const createDateGlobalStore = createGlobalStore<filterDateType>(
  "filteringDate",
  { date: "" }
);

// export const dateGlobalStore = useStore(
//   createDateGlobalStore,
//   (state) => state.date
// );
