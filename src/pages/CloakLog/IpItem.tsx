type IpItemProps = {
  ip: string;
  inBlackList: boolean;
};
const IpItem = (props: IpItemProps) => {
  return (
    <div className="flex w-full  justify-between">
      <span className={`${props.inBlackList && 'text-red'}`}>{props.ip}</span>
      <a className="ml-2">添加黑名单</a>
    </div>
  );
};

export default IpItem;
