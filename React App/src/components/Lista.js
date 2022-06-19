const Lista = ({ variable, render }) => {
  return <ul>{variable.map(render)}</ul>;
};
export default Lista;
