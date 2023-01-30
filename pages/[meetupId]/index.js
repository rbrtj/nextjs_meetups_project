import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
        id: meetupId
      },
    },
  };
}

export default MeetupDetails;
