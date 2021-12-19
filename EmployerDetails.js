import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import axios from "axios";
import {
  Avatar,
  Card,
  Paragraph,
  Button,
  Searchbar,
  Colors,
  ActivityIndicator,
  HelperText,
  Title,
} from "react-native-paper";
import moment from "moment";

export default function EmployerDetails({ navigation }) {
  const [apiData, setApiData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  // const getDataFromApi = async () => {
  //   try {
  //     const Employers = await axios.get("https://api.github.com/gists")

  //     setApiData(Employers.data.filter((a) => a.owner.login.toLowerCase().includes(searchText.toLowerCase())));

  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  useEffect(() => {
    axios.get("https://api.github.com/gists").then((responseFromApi) => {
      setLoading(false);
      setApiData(responseFromApi.data);
      setFilteredData(responseFromApi.data);
      console.log(responseFromApi.data);
    });
    // setInterval(() => {
    //   getDataFromApi()
    // }, 30000)
  }, []);

  useEffect(() => {
    setFilteredData(
      apiData.filter((a) =>
        a.owner.login.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator animating={loading} color={Colors.red800} />

          {filteredData.map((a, index) => (
            <Card
              // onPress={() => navigation.navigate("SingleData", a)}
              key={index}
              style={{
                padding: 20,
                margin: 10,
                borderRadius: 6,
                align: "center",
                justifyContent: "center",
              }}
            >
              <Card.Content>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar.Image
                    size={40}
                    source={{ uri: a.owner.avatar_url }}
                  />
                  <View style={{ marginLeft: 24 }}>
                    <Title>{a.owner.login}</Title>
                    <Paragraph>
                      Date:{moment(a.created_at).format("L")}
                    </Paragraph>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>

        {filteredData.length <= 0 && (
          <HelperText type="error">
            There are no users with the name!!Please use the right key words
          </HelperText>
        )}
      </ScrollView>
    </>
  );
}
