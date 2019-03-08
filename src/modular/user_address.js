import Address from "../views/Middle.vue";
import AddressList from "../views/user/Address.vue";
import AddAddress from "../views/user/AddAddress.vue";
import EditAddress from "../views/user/EditAddress.vue";

const module = {
  path: "address",
  name: "user_address",
  component: Address,
  children: [
    { path: "", component: AddressList },
    { path: "create", component: AddAddress },
    { path: ":address_id", name:"user_edit_address",  component: EditAddress }
  ]
};

export default module;
