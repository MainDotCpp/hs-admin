type Prop<T> = {
  req: () => Promise<T>;
};

function bb<T>(a: Prop<T>) {
  return a.req();
}

bb({ req: async () => '555' }).then((r) => {});
