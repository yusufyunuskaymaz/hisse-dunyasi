
        <div className="col ps-0">
          <CompanyInfo itemTitle={item.code} />
        </div>
        <div className="col ps-0">
          <AboutCompany itemTitle={item.code} />
          <CurrencyComment itemCode={itemCode} commentList={commentList}/>

        </div>
        <div className="col ps-0">
          <Analiz itemTitle={item.code} />
        </div>
        <div className="col ps-0 mb-5">
          <News itemTitle={item.code} itemText={item.text} />
        </div>