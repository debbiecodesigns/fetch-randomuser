import { useEffect, useState } from "react";

const initalState = {
  loading: true,
  people: []
};

const UserCards = () => {
  const [data, setData] = useState(initalState);

  useEffect(() => {
    setInterval(() => {
      try {
        async function fetchData() {
          const response = await fetch("https://randomuser.me/api/?results=1");
          const data = await response.json();
          setData({ people: data.results, loading: false });
        }
        console.log(fetchData());
      } catch (error) {
        console.log("error");
      }
    }, 3000);
  }, []);

  return (
    <div>
      {data.loading ? (
        <p>Loading...</p>
      ) : (
        data.people.map((item) => (
          <div key={item.name.first + item.name.last}>
            <div>{item.name.title}</div>
            <div>{item.name.first}</div>
            <div>{item.name.last}</div>
            <img src={item.picture.large} />
          </div>
        ))
      )}
    </div>
  );
};

export default UserCards;
