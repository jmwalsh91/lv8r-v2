import React, { ReactEventHandler } from "react";

type Props = {};

function UserIndex({}: Props) {
  const handleClick: ReactEventHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("javascript still working");
  };

  return (
    <div>
      <div className="text-3xl text-secondary">
        This is the dashboard of /$user
      </div>
      <div className="btn btn-accent" onClick={(e) => handleClick(e)}>
        Click me please
      </div>
    </div>
  );
}

export default UserIndex;
