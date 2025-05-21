import ServicesDetay from "@/components/externalPages/detayils/servicesDetay";

export default async function Detay({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <>
      <ServicesDetay slug={id} />
    </>
  );
}
