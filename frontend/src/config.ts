interface ConfigInterface {
  backend: {
    url: string;
  };
}

export const Config: ConfigInterface = {
  backend: {
    url: "http://localhost:3000",
  },
};
