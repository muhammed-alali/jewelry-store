import PropertiesDetay from "@/components/externalPages/detayils/propertiesDetay";

export default async function Detay({ params }: { params: Promise<any> }) {
  const { id } = await params;
  return (
    <>
      <PropertiesDetay slug={id} />
    </>
  );
}
