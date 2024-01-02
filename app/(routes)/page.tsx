import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  // Featured Products data from getProducts action function
  const product = await getProducts({ isFeatured: true });

  // Single Billboard data
  const billboard = await getBillboard("e7d5b8d5-3f0a-40a4-94cc-0d9eef45b322");
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gapy-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={product} />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
