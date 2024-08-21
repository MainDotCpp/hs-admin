// import { AiOutlineCloseCircle } from 'react-icons/ai';

interface IpItemProps {
  ip: string;
  inBlackList: boolean;
}

function IpItem(props: IpItemProps) {
  const a = '';
  return (
    <div className="flex w-full items-center  justify-between ">
      <span className={`${props.inBlackList && 'text-red'}`}>{props.ip}</span>
      {/* <AiOutlineCloseCircle className={'font-black text-red text-xl  '} /> */}
    </div>
  );
}

export default IpItem;
