import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { Tooltip } from 'antd';
import api from '@/api';

interface IpItemProps {
  ip: string;
  inBlackList: boolean;
}

function IpItem(props: IpItemProps) {
  const [inBlackList, setInBlackList] = useState(props.inBlackList);
  const onAddBlacklistClick = () => {
    setInBlackList(true);
    api.blacklistIp.save({
      // @ts-ignore
      ip: props.ip,
    }).then();
  };
  return (
    <div className="flex w-full items-center  justify-between ">
      <span className={`${inBlackList && 'text-red'}`}>{props.ip}{inBlackList &&
        <span>[黑名单]</span>}</span>
      {!inBlackList &&
        <Tooltip title={'添加黑名单'}>
          <AiOutlineCloseCircle className={'font-black text-red text-xl cursor-pointer'}
                                onClick={onAddBlacklistClick} />
        </Tooltip>
      }
    </div>
  );
}

export default IpItem;
