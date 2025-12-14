import { TItemOTType } from "../types/common";

const itemOTTypes: TItemOTType[] = [
  "main",
  "open-sea",
  "events",
  "design",
  "content",
  "master-class",
  "lamp",
  "smm",
  "all",
  "play",
  "contest",
  "short-film",
  "admins",
  "artists",
  "hero",
];

export function isItemOTType(item: unknown): item is TItemOTType {
  return itemOTTypes.some((type) => type === (item as TItemOTType));
}
