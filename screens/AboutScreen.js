import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";

const AboutScreen = () => {
  return (
    <ScrollView wrapperStyle={{ margin: 20 }}>
      <Card>
        <Card.Title>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Our Mission
          </Text>
        </Card.Title>
        <Card.Divider />
        <Text>
          We present a curated database of the best campsites in the vast woods
          and backcountry of the World Wide Web Wilderness. We increase access
          to adventure for the public while promoting safe and respectful use of
          resources. The expert wilderness trekkers on our staff personally
          verify each campsite to make sure that they are up to our standards.
          We also present a platform for campers to share reviews on campsites
          they have visited with each other.
        </Text>
      </Card>
      <Card>
        <Card.Title>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Community Partners
          </Text>
        </Card.Title>
        <Card.Divider />
        {PARTNERS.map((partner) => {
          return (
            <ListItem key={partner.id} partner={partner}>
              <Avatar rounded source={partner.image}></Avatar>
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};
export default AboutScreen;
