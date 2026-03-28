import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Set "mo:core/Set"; // Add this import
import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";



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

  // Shopping cart functions
  public shared ({ caller }) func addItemToCart(productId : Nat) : async () {
    let cartActor = actor "gimz3-b4aaa-aaaap-abtda-cai" : actor {
      addProduct : (id : Nat, quantity : Nat) -> async ();
    };
    await cartActor.addProduct(productId, 1);
  };

  public shared ({ caller }) func removeItemFromCart(productId : Nat) : async () {
    let cartActor = actor "gimz3-b4aaa-aaaap-abtda-cai" : actor {
      removeProduct : (id : Nat, quantity : Nat) -> async ();
    };
    await cartActor.removeProduct(productId, 1);
  };
};
