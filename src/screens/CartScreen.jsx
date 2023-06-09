import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector , useDispatch} from "react-redux";
import { confirm_cart, remove_item } from "../store/actions/cart.action";

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleDeleteitem = (id) => {
    console.log(id);
    dispatch(remove_item(id))
  };

  const handleConfirmCart = () => {
    dispatch(confirm_cart(items, total))
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteitem}/>
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderCartItem}/>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.confirmText}>Confirmar</Text>
          <View>
            <Text style={styles.priceText}>{`Total: $ ${total}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#aliceblue",
/*     paddingBottom: 120, */
  },
  list: {
    flex: 3,
  },
  footer: {
    flex: 1,
    padding: 12,
    borderTopColor: "#F0B626",
    borderTopWidth: 2,
  },
  confirm: {
    backgroundColor: "#9DDF5A",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 18,
  },
  confirmText: {
    fontSize: 17,
  }
});