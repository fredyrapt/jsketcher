import React from 'react';
import _ from 'lodash';

export function Columnizer({columns, children, spacing, ...props}) {

  const items = React.Children.toArray(children);

  const rows = Math.ceil(items.length / columns);
  let itemsCounter = 0;
  return <table {...props}>
    <tbody>
      {_.times(rows, () => {
        let key = '';
        for (let i = itemsCounter; i < columns; i++) {
          key += items[i] ? items[i].key : '';
          key += ':';
        }
        return <tr key={key}>
          {
            _.times(columns, () => {
              const item = items[itemsCounter++];
              return item && <td key={item.key} style={{padding: spacing}}>
                {item}
              </td>;
            })
          }
        </tr>
      })}
    </tbody>
  </table>
}