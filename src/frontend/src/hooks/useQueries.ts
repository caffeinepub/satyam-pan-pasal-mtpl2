import { useMutation } from "@tanstack/react-query";
import { PackageType } from "../backend";
import { useActor } from "./useActor";

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  packageType: PackageType;
  numberOfGuests: number;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitBooking() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: BookingFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitBooking(
        data.name,
        data.email,
        data.phone,
        data.preferredDate,
        data.packageType,
        BigInt(data.numberOfGuests),
        data.message,
      );
    },
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContact(data.name, data.email, data.message);
    },
  });
}

export { PackageType };
