import { memo } from "react";
function Empty({ resource }) {
  return <p>No {resource} could be found.</p>;
}

export default memo(Empty);
