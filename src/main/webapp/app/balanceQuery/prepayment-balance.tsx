import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, InputGroup, Col, Row, Table } from 'reactstrap';
import { TextFormat } from 'react-jhipster';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './prepayment-balance.reducer';
import { APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPrepaymentDataProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const PrepaymentBalance = (props: IPrepaymentDataProps) => {

  const { prepaymentBalanceList } = props;
  return (
    <div>
      <h2 id="prepayment-balance-heading">
        Prepayment Balance
      </h2>
      <div className="table-responsive">
        {prepaymentBalanceList && prepaymentBalanceList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand">
                prepaymentDataId
                </th>
                <th className="hand">
                  Account Name
                </th>
                <th className="hand">
                  Description
                </th>
                <th className="hand">
                  Account Number
                </th>
                <th className="hand">
                  Expense Account Number
                </th>
                <th className="hand">
                  Prepayment Number
                </th>
                <th className="hand">
                  Prepayment Date
                </th>
                <th className="hand">
                  Outstanding Amount
                </th>
                <th className="hand">
                  Prepayment Periods
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {prepaymentBalanceList.map((prepaymentBalance, i) => (
                <tr key={`entity-${i}`}>
                  <td>{prepaymentBalance.prepaymentDataId}</td>
                  <td>{prepaymentBalance.accountName}</td>
                  <td>{prepaymentBalance.description}</td>
                  <td>{prepaymentBalance.accountNumber}</td>
                  <td>{prepaymentBalance.expenseAccountNumber}</td>
                  <td>{prepaymentBalance.prepaymentNumber}</td>
                  <td>
                    {prepaymentBalance.prepaymentDate ? (
                      <TextFormat type="date" value={prepaymentBalance.prepaymentDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{prepaymentBalance.outstandingAmount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="alert alert-warning">No Prepayment Data found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ prepaymentBalance }: IRootState) => ({
  prepaymentBalanceList: prepaymentBalance.entities,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepaymentBalance);
