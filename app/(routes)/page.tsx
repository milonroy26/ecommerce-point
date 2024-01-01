import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  // Featured Products data from getProducts action function
  const peoduts = await getProducts({ isFeatured: true });

  // Single Billboard data
  const billboard = await getBillboard("be0f2b6d-3600-4ef3-816d-7d0d3b00dd11");
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gapy-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={peoduts} />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
