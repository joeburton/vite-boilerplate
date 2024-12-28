import { useEffect, useState } from "react";
import axios from "axios";
import List, { JobsInterface } from "../List/List";

const MSWIntercept = ({ url }: { url: string }) => {
  const [projects, setData] = useState<JobsInterface[]>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        if (!Array.isArray(response.data)) throw Error("data is not an array");
        setData(response.data);
      } catch (error) {
        throw Error("error fetching data");
      }
    }

    getData();
  }, [url]);

  return (
    <>
      <h2>Fetch Data</h2>

      <ul data-testid="select-list">
        {projects && Array.isArray(projects) && (
          <div data-testid="list">
            <List data={projects} listName="Projects" />
          </div>
        )}
      </ul>
    </>
  );
};

export default MSWIntercept;
