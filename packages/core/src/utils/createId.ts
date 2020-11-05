
let id = 0;

function createId(): string {
  id++;
  return id.toString();
}

export default createId;