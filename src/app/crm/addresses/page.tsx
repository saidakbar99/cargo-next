import CrmLayout from "@/components/CrmLayout";
import NoData from "@/components/NoData";

const Addresses = () => {
  const isEmpty = false

  if (isEmpty) {
    return <NoData pageName="manzillar" />
  }
  return (
    <CrmLayout activeMenu='addresses'>
      <div></div>
    </CrmLayout>
  )
}

export default Addresses;
