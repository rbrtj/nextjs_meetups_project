import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
      address: "Some address 5, 123 krakow",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
      address: "Some address 5, 123 krakow",
      description: "This is a second meetup",
    },
    {
      id: "m3",
      title: "A Third Meetup",
      image:
        "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
      address: "Some address 5, 123 krakow",
      description: "This is a third meetup",
    },
  ];

  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;