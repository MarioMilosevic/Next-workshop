type SlugType = {
  params: {
    slug: string;
  };
};

const page = ({ params }: SlugType) => {
  return <div>{params.slug}</div>;
};

export default page;
