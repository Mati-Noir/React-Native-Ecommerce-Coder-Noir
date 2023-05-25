import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ORDERS } from "../data/orders";
import OrderItem from "../components/OrderItem"

const OrdersScreen = () => {

    const handleDeleteOrder = () => {
      console.log("Delete Order");
    };

    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={handleDeleteOrder} />
    );

  return (
    <View>
      <FlatList
      data={ORDERS}
      keyExtractor={item => item.id}
      renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrdersScreen

const styles = StyleSheet.create({})