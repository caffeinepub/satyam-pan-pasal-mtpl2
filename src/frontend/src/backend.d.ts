import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    id: bigint;
    packageType: PackageType;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: bigint;
    phone: string;
    numberOfGuests: bigint;
}
export interface Contact {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export enum PackageType {
    vip = "vip",
    premium = "premium",
    standard = "standard"
}
export interface backendInterface {
    getAllBookings(): Promise<Array<Booking>>;
    getAllContacts(): Promise<Array<Contact>>;
    submitBooking(name: string, email: string, phone: string, preferredDate: string, packageType: PackageType, numberOfGuests: bigint, message: string): Promise<void>;
    submitContact(name: string, email: string, message: string): Promise<void>;
}
