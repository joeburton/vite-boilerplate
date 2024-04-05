import { useEffect, useState } from "react";
import List, { JobInterface } from "../List/List";

const MSWIntercept = ({ url }: { url: string }) => {
  const [projects, setData] = useState<JobInterface[]>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!Array.isArray(data)) throw Error("data is not an array");
        setData(data);
      } catch (error) {
        throw Error("error fetching data");
      }
    }

    getData();
  }, [url]);

  return (
    <>
      {projects && Array.isArray(projects) && (
        <div data-testid='list'>
          <List data={projects} listName='Projects' />
        </div>
      )}
    </>
  );
};

export default MSWIntercept;
