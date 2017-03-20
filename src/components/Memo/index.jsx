import React from 'react';
import { Card } from '../General';
import UpdateMemo from './UpdateMemo';
import WidgetHeader from '../Widgets/WidgetHeader';

function MemoBox() {
  return(
    <div>
      <WidgetHeader
        name="Memo"
        type="antd"
        icon="copy"
      />
      <Card>
        <UpdateMemo />
      </Card>
    </div>

  );
}

export default MemoBox;
