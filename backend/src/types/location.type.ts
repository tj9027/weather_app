import zod from "zod";

export const ZLocationType = zod.object({
  lat: zod.number().optional(),
  lon: zod.number().optional(),
  name: zod.string().optional(),
});

export type LocationType = zod.infer<typeof ZLocationType>;
