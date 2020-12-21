import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

type DataRow = {
  id: number;
  name: string;
};

type Schema = {
  data: DataRow[];
};

const adapter = new FileAsync<Schema>('./data.json');
export default lowdb(adapter);
