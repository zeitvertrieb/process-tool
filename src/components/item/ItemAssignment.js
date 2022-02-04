import React from 'react';
import { UserAvatarFilledAlt32 } from '@carbon/icons-react';

function ItemAssignment({ user }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {!user && <UserAvatarFilledAlt32 />}
      {user === 'Anna' && (
        <img src="https://randomuser.me/api/portraits/women/86.jpg" alt="" />
      )}
      {user === 'Kim' && (
        <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
      )}
      {user === 'Erik' && (
        <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="" />
      )}
      {user === 'Mike' && (
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
      )}
      <span style={{ marginLeft: 'var(--cds-spacing-03)' }}>
        {!user ? <span>Nicht zugewiesen</span> : <span>{user}</span>}
      </span>
    </span>
  );
}

export default ItemAssignment;
