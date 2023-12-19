const List = ({ data, listName }: { data: String[]; listName: string }) => {
  return (
    <>
      <h2>{listName}</h2>
      {console.log(data)}
      <ul data-testid='select-list'>
        {data && (
          <>
            {data.map((item, _i) => {
              return (
                <li data-testid={item} key={Math.random()}>
                  {item}
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
