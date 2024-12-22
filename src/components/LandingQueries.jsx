import Card from "./card";

const LandingQueries = () => {
  const data = [
    {
      _id: "1",
      product: "iPhone 15",
      brand: "Apple",
      img: "https://i.ibb.co.com/3c0S7t3/product-1-01.jpg",
      queryTitle: "Is there any better product that gives me the same quality?",
      reason: "High price compared to alternatives.",
      userEmail: "user1@example.com",
      userName: "John Doe",
      userImg: "https://example.com/user1.jpg",
      date: "2024-12-22T10:00:00Z",
      recCount: 0,
    },
    {
      _id: "2",
      product: "NVIDIA 4060",
      brand: "NVIDIA",
      img: "https://i.ibb.co.com/4ZNkVHG/product-2-01.jpg",
      queryTitle: "Looking for a cheaper GPU with similar performance.",
      reason: "Too expensive for mid-range gaming.",
      userEmail: "user2@example.com",
      userName: "Jane Smith",
      userImg: "https://example.com/user2.jpg",
      date: "2024-12-21T15:30:00Z",
      recCount: 0,
    },
    {
      _id: "3",
      product: "Apple Vision",
      brand: "Apple",
      img: "https://i.ibb.co.com/j6ptdnY/product-3-01.jpg",
      queryTitle: "Any alternatives for VR with better battery life?",
      reason: "Battery drains too quickly.",
      userEmail: "user3@example.com",
      userName: "Alice Johnson",
      userImg: "https://example.com/user3.jpg",
      date: "2024-12-20T18:45:00Z",
      recCount: 0,
    },
    {
      _id: "4",
      product: "Mi Band",
      brand: "Xiaomi",
      img: "https://i.ibb.co.com/SfzP2Gb/product-4-01.jpg",
      queryTitle: "Suggestions for a fitness tracker with better durability?",
      reason: "Build quality is not up to the mark.",
      userEmail: "user4@example.com",
      userName: "Bob Brown",
      userImg: "https://example.com/user4.jpg",
      date: "2024-12-20T09:20:00Z",
      recCount: 0,
    },
    {
      _id: "5",
      product: "AirPods Max",
      brand: "Apple",
      img: "https://i.ibb.co.com/6Z23txB/product-5-01.jpg",
      queryTitle: "Are there noise-canceling headphones with better value?",
      reason: "Too costly for the features.",
      userEmail: "user5@example.com",
      userName: "Charlie White",
      userImg: "https://example.com/user5.jpg",
      date: "2024-12-19T11:10:00Z",
      recCount: 0,
    },
    {
      _id: "6",
      product: "Mac Studio",
      brand: "Apple",
      img: "https://i.ibb.co.com/jD3CX4w/product-6-01.jpg",
      queryTitle: "Suggestions for a workstation PC with similar power?",
      reason: "Overpriced for personal use.",
      userEmail: "user6@example.com",
      userName: "Diana King",
      userImg: "https://example.com/user6.jpg",
      date: "2024-12-18T16:50:00Z",
      recCount: 0,
    },
  ];

  return (
    <div className="my-10">
      <h1 className="text-center text-primary text-4xl font-bold">
        Find Better Alternatives
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Explore product queries, suggestions, and recommendations.
      </p>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto">
        {data.map((item) => (
          <Card {...item} key={item._id}></Card>
        ))}
      </section>
    </div>
  );
};

export default LandingQueries;
