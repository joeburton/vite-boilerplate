import { useEffect, useState } from "react";
import axios from "axios";

// interface Todo {
//   id: string;
//   listName: string;
//   title: string;
//   detail: string;
//   complete: boolean;
//   date: string;
// }

const MSWIntercept = ({ url }: { url: string }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [url]);

  return (
    <>
      <h2>Fetch Data</h2>

      <ul data-testid='select-list'>
        {data && (
          <div data-testid='list'>
            {data?.data.map((item: any) => {
              return (
                <li data-testid={item._id} key={Math.random()}>
                  {item?.role}
                </li>
              );
            })}
          </div>
        )}
      </ul>
    </>
  );
};

export default MSWIntercept;
