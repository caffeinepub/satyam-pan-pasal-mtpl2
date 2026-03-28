import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Set "mo:core/Set";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Map "mo:core/Map";



actor {
  // Helper functions
  module BookingComparer {
    public func compare(a : Booking, b : Booking) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module ContactComparer {
    public func compare(a : Contact, b : Contact) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  func compareBookingById(a : Booking, b : Booking) : Order.Order {
    Nat.compare(a.id, b.id);
  };

  func compareContactById(a : Contact, b : Contact) : Order.Order {
    Nat.compare(a.id, b.id);
  };

  // Types
  type Booking = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    preferredDate : Text;
    packageType : PackageType;
    numberOfGuests : Nat;
    message : Text;
    timestamp : Int;
  };

  type Contact = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type PackageType = {
    #standard;
    #premium;
    #vip;
  };

  // Persistent State
  var nextBookingId = 1;
  var nextContactId = 1;

  let bookings = Map.empty<Nat, Booking>();
  let contacts = Map.empty<Nat, Contact>();

  // Booking inquiry
  public shared ({ caller }) func submitBooking(
    name : Text,
    email : Text,
    phone : Text,
    preferredDate : Text,
    packageType : PackageType,
    numberOfGuests : Nat,
    message : Text,
  ) : async () {
    let booking : Booking = {
      id = nextBookingId;
      name;
      email;
      phone;
      preferredDate;
      packageType;
      numberOfGuests;
      message;
      timestamp = Time.now();
    };

    bookings.add(nextBookingId, booking);
    nextBookingId += 1;
  };

  // Contact form
  public shared ({ caller }) func submitContact(
    name : Text,
    email : Text,
    message : Text,
  ) : async () {
    let contact : Contact = {
      id = nextContactId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    contacts.add(nextContactId, contact);
    nextContactId += 1;
  };

  // Admin functions
  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort(compareBookingById);
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.values().toArray().sort(compareContactById);
  };
};
