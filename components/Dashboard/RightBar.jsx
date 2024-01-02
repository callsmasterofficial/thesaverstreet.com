import Earn from "./Earn";
import Withdraw from "./Withdraw";

function RightBar({activeTab}) {
  return (
    <div>
      <div className="user-panel-body-right">
        <div className="user-panel-tab-view mb-0">
          <div className="rounded overflow-hidden mb-3  shadow-sm">
            {activeTab == 0 && <div className="p-4 bg-white" >
              <Earn />
            </div>}
            {activeTab == 1 && <div className="p-4 bg-white">
              <Withdraw />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
