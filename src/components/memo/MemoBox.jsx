import React from 'react';
import { Card } from '../ui-components/General';
import UpdateMemo from '../../containers/memo/UpdateMemo';
import WidgetHeader from '../widgets/WidgetHeader';

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
