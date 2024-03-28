import classes from "./List.module.css";

export interface JobsInterface {
  class?: string;
  company?: string;
  description?: string;
  links?: null | string[];
  logo?: string;
  order?: number;
  role: string;
  skills?: string;
  _id?: string;
}

const List = ({
  data,
  listName,
}: {
  data: JobsInterface[];
  listName: string;
}) => {
  return (
    <>
      <h2>{listName}</h2>
      <ul data-testid='select-list' className={classes.list}>
        {data && (
          <>
            {data.map((item) => {
              return (
                <li data-testid={item} key={Math.random()}>
                  {item.role}
                </li>
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default List;
