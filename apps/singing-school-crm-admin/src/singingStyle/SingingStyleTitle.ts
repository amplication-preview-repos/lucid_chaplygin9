import { SingingStyle as TSingingStyle } from "../api/singingStyle/SingingStyle";

export const SINGINGSTYLE_TITLE_FIELD = "name";

export const SingingStyleTitle = (record: TSingingStyle): string => {
  return record.name?.toString() || String(record.id);
};
