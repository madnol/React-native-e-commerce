import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#E57373",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#FF8A65", icon: "car" },
  { label: "Camera", value: 3, backgroundColor: "#FFD54F", icon: "camera" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#AED581",
    icon: "gamepad-variant",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#4DD0E1",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#BA68C8", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#FFB74D",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#7986CB",
    icon: "book-open-variant",
  },
  { label: "Other", value: 9, backgroundColor: "#4DB6AC", icon: "application" },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
        }}
        onSubit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          // numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
