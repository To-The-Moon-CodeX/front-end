
import React, { useEffect, useState } from "react";

export const AddressInfo = () => {
  const [data, setData] = useState(null);
  console.log("🚀 ~ file: AddressInfo.jsx ~ line 6 ~ AddressInfo ~ data", data)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getaddressinfo")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <p>{data.result}</p>
      {/* <p>{data.bio}</p> */}
    </div>
  );
}
