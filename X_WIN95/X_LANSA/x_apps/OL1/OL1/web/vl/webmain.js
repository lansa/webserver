// -----------------------
// -- Web Page: WEBMAIN --
// -----------------------
LANSA.addComponent(
{
   id: "WEBMAIN", 
   nm: "WEBMain", 
   ot: "wp", 
   tp: "Web Page", 
   de: "My Webserver", 
   tl: 14020007
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutMain)
         //
         var LAYOUTMAIN = this.createReference( "LAYOUTMAIN", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn1) Displayposition(1) Parent(#LayoutMain) Units(Content) Width(220)
         //
         var LAYOUTMAINCOLUMN1 = this.createReference( "LAYOUTMAINCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutMainColumn2) Displayposition(2) Parent(#LayoutMain)
         //
         var LAYOUTMAINCOLUMN2 = this.createReference( "LAYOUTMAINCOLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow1) Displayposition(1) Parent(#LayoutMain) Height(56) Units(Pixels)
         //
         var LAYOUTMAINROW1 = this.createReference( "LAYOUTMAINROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow2) Displayposition(2) Parent(#LayoutMain) Height(40) Units(Content)
         //
         var LAYOUTMAINROW2 = this.createReference( "LAYOUTMAINROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutMainRow3) Displayposition(3) Parent(#LayoutMain)
         //
         var LAYOUTMAINROW3 = this.createReference( "LAYOUTMAINROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem1) Column(#LayoutMainColumn1) Manage(#AppBar) Parent(#LayoutMain) Row(#LayoutMainRow1) Columnspan(2)
         //
         var LAYOUTMAINITEM1 = this.createReference( "LAYOUTMAINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem2) Column(#LayoutMainColumn1) Manage(#AppDrawer) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToHeight) Rowspan(2)
         //
         var LAYOUTMAINITEM2 = this.createReference( "LAYOUTMAINITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem4) Column(#LayoutMainColumn2) Manage(#SearchString) Parent(#LayoutMain) Row(#LayoutMainRow2) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LAYOUTMAINITEM4 = this.createReference( "LAYOUTMAINITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutMainItem3) Column(#LayoutMainColumn2) Manage(#ViewContainer) Parent(#LayoutMain) Row(#LayoutMainRow3)
         //
         var LAYOUTMAINITEM3 = this.createReference( "LAYOUTMAINITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppBar)
         //
         var LAYOUTAPPBAR = this.createReference( "LAYOUTAPPBAR", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppBarRow1) Displayposition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARROW1 = this.createReference( "LAYOUTAPPBARROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppBarColumn1) Displayposition(1) Parent(#LayoutAppBar)
         //
         var LAYOUTAPPBARCOLUMN1 = this.createReference( "LAYOUTAPPBARCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppBarItem1) Alignment(CenterRight) Column(#LayoutAppBarColumn1) Manage(#SearchIcon) Parent(#LayoutAppBar) Row(#LayoutAppBarRow1) Sizing(None)
         //
         var LAYOUTAPPBARITEM1 = this.createReference( "LAYOUTAPPBARITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWER = this.createReference( "LAYOUTAPPDRAWER", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#LayoutAppDrawerColumn1) Displayposition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERCOLUMN1 = this.createReference( "LAYOUTAPPDRAWERCOLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#LayoutAppDrawerRow1) Displayposition(1) Parent(#LayoutAppDrawer)
         //
         var LAYOUTAPPDRAWERROW1 = this.createReference( "LAYOUTAPPDRAWERROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutAppDrawerItem1) Column(#LayoutAppDrawerColumn1) Manage(#Menu) Parent(#LayoutAppDrawer) Row(#LayoutAppDrawerRow1)
         //
         var LAYOUTAPPDRAWERITEM1 = this.createReference( "LAYOUTAPPDRAWERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppBar) Name(#AppBar) Displayposition(1) Parent(#COM_OWNER) Tabposition(1) Width(1200) Themedrawstyle('Heading1') Caption('My Webserver2') Captionmarginbottom(0) Captionmarginright(0) Captionmargintop(0) Icon('menu') Layoutmanager(#LayoutAppBar)
         //
         var APPBAR = this.createReference( "APPBAR", "PRIM_MD", "AppBar" );

         //
         // DEFINE_COM Class(#PRIM_MD.Icon) Name(#SearchIcon) Displayposition(1) Icon('search') Left(1152) Parent(#AppBar) Tabposition(1) Top(4)
         //
         var SEARCHICON = this.createReference( "SEARCHICON", "PRIM_MD", "Icon" );

         //
         // DEFINE_COM Class(#PRIM_MD.AppDrawer) Name(#AppDrawer) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Top(56) Height(744) Layoutmanager(#LayoutAppDrawer) Themedrawstyle('MediumTitle') Width(220)
         //
         var APPDRAWER = this.createReference( "APPDRAWER", "PRIM_MD", "AppDrawer" );

         //
         // DEFINE_COM Class(#PRIM_MD.Menu) Name(#Menu) Displayposition(1) Height(744) Parent(#AppDrawer) Showselection(False) Tabposition(1) Verticalscroll(True) Width(220)
         //
         var MENU = this.createReference( "MENU", "PRIM_MD", "Menu" );

         //
         // DEFINE_COM Class(#PRIM_MD.MenuItem) Name(#MenuItemContacts) Caption('Contacts') Displayposition(1) Left(0) Parent(#Menu) Tabposition(1) Tabstop(False) Top(0) Width(220) Height(48) Icon('view_quilt') View(#Contacts)
         //
         var MENUITEMCONTACTS = this.createReference( "MENUITEMCONTACTS", "PRIM_MD", "MenuItem" );

         //
         // DEFINE_COM Class(#PRIM_MD.MenuItem) Name(#MenuItemView2) Caption('View2') Displayposition(2) Left(0) Parent(#Menu) Tabposition(2) Tabstop(False) Top(48) Width(220) Height(48) Icon('view_quilt') View(#View2)
         //
         var MENUITEMVIEW2 = this.createReference( "MENUITEMVIEW2", "PRIM_MD", "MenuItem" );

         //
         // DEFINE_COM Class(#PRIM_MD.MenuItem) Name(#MenuItemView3) Caption('View3') Displayposition(3) Left(0) Parent(#Menu) Tabposition(3) Tabstop(False) Top(96) Width(220) Height(48) Icon('view_quilt') View(#View3)
         //
         var MENUITEMVIEW3 = this.createReference( "MENUITEMVIEW3", "PRIM_MD", "MenuItem" );

         //
         // DEFINE_COM Class(#PRIM_MD.MenuItem) Name(#MenuItemSettings) Caption('Settings') Displayposition(4) Left(0) Parent(#Menu) Tabposition(4) Tabstop(False) Top(144) Width(220) Height(48) Icon('settings') Themedrawstyle('TopDivider') View(#Settings)
         //
         var MENUITEMSETTINGS = this.createReference( "MENUITEMSETTINGS", "PRIM_MD", "MenuItem" );

         //
         // DEFINE_COM Class(#PRIM_MD.MenuItem) Name(#MenuItemSignOut) Caption('Sign Out') Displayposition(5) Left(0) Parent(#Menu) Tabposition(5) Tabstop(False) Top(192) Width(220) Height(48) Icon('exit_to_app')
         //
         var MENUITEMSIGNOUT = this.createReference( "MENUITEMSIGNOUT", "PRIM_MD", "MenuItem" );

         //
         // DEFINE_COM Class(#PRIM_MD.Edit) Name(#SearchString) Appearance(None) Displayposition(4) Height(40) Helperposition(None) Captionposition(None) Left(220) Parent(#COM_OWNER) Tabposition(4) Top(56) Width(980) Icon('search') Placeholder('Search') Themedrawstyle('BottomDivider') Visible(False)
         //
         var SEARCHSTRING = this.createReference( "SEARCHSTRING", "PRIM_MD", "Edit" );

         //
         // DEFINE_COM Class(#PRIM_MD.ViewContainer) Name(#ViewContainer) Displayposition(3) Left(220) Parent(#COM_OWNER) Tabposition(3) Top(96) Height(704) Width(980)
         //
         var VIEWCONTAINER = this.createReference( "VIEWCONTAINER", "PRIM_MD", "ViewContainer" );

         //
         // DEFINE_COM Class(#WEBContacts) Name(#Contacts) Height(704) Left(326) Parent(#ViewContainer) Width(980)
         //
         var CONTACTS = this.createReference( "CONTACTS", "WEBCONTAC" );

         //
         // DEFINE_COM Class(#WEBView2) Name(#View2) Height(704) Left(652) Parent(#ViewContainer) Width(980) Displayposition(2) Tabposition(2)
         //
         var VIEW2 = this.createReference( "VIEW2", "WEBVIEW2" );

         //
         // DEFINE_COM Class(#WEBView3) Name(#View3) Height(704) Parent(#ViewContainer) Width(980) Displayposition(3) Tabposition(3) Top(231)
         //
         var VIEW3 = this.createReference( "VIEW3", "WEBVIEW3" );

         //
         // DEFINE_COM Class(#WEBSettings) Name(#Settings) Displayposition(4) Parent(#ViewContainer) Caption('Settings') Height(704) Width(980) Left(326) Tabposition(4) Top(231)
         //
         var SETTINGS = this.createReference( "SETTINGS", "WEBSETTIN" );

         //
         // DEFINE_COM Class(#WEBSignIn) Name(#SignIn)
         //
         var SIGNIN = this.createReference( "SIGNIN", "WEBSIGNIN" );

         // ----------------------------
         // -- Initialize #LAYOUTMAIN --
         // ----------------------------
         LAYOUTMAIN.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN1 --
         // -----------------------------------
         LAYOUTMAINCOLUMN1.setDisplayPosition( 1 );
         LAYOUTMAINCOLUMN1.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN1.setUnits( "CONTENT" );
         LAYOUTMAINCOLUMN1.setWidth( 220 );
         LAYOUTMAINCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTMAINCOLUMN2 --
         // -----------------------------------
         LAYOUTMAINCOLUMN2.setDisplayPosition( 2 );
         LAYOUTMAINCOLUMN2.setParent( LAYOUTMAIN );
         LAYOUTMAINCOLUMN2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW1 --
         // --------------------------------
         LAYOUTMAINROW1.setDisplayPosition( 1 );
         LAYOUTMAINROW1.setParent( LAYOUTMAIN );
         LAYOUTMAINROW1.setHeight( 56 );
         LAYOUTMAINROW1.setUnits( "PIXELS" );
         LAYOUTMAINROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW2 --
         // --------------------------------
         LAYOUTMAINROW2.setDisplayPosition( 2 );
         LAYOUTMAINROW2.setParent( LAYOUTMAIN );
         LAYOUTMAINROW2.setHeight( 40 );
         LAYOUTMAINROW2.setUnits( "CONTENT" );
         LAYOUTMAINROW2.initialize();

         // --------------------------------
         // -- Initialize #LAYOUTMAINROW3 --
         // --------------------------------
         LAYOUTMAINROW3.setDisplayPosition( 3 );
         LAYOUTMAINROW3.setParent( LAYOUTMAIN );
         LAYOUTMAINROW3.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM1 --
         // ---------------------------------
         LAYOUTMAINITEM1.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM1.setManage( APPBAR );
         LAYOUTMAINITEM1.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM1.setRow( LAYOUTMAINROW1 );
         LAYOUTMAINITEM1.setColumnSpan( 2 );
         LAYOUTMAINITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM2 --
         // ---------------------------------
         LAYOUTMAINITEM2.setColumn( LAYOUTMAINCOLUMN1 );
         LAYOUTMAINITEM2.setManage( APPDRAWER );
         LAYOUTMAINITEM2.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM2.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM2.setSizing( "FITTOHEIGHT" );
         LAYOUTMAINITEM2.setRowSpan( 2 );
         LAYOUTMAINITEM2.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM4 --
         // ---------------------------------
         LAYOUTMAINITEM4.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM4.setManage( SEARCHSTRING );
         LAYOUTMAINITEM4.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM4.setRow( LAYOUTMAINROW2 );
         LAYOUTMAINITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTMAINITEM4.setAlignment( "TOPCENTER" );
         LAYOUTMAINITEM4.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTMAINITEM3 --
         // ---------------------------------
         LAYOUTMAINITEM3.setColumn( LAYOUTMAINCOLUMN2 );
         LAYOUTMAINITEM3.setManage( VIEWCONTAINER );
         LAYOUTMAINITEM3.setParent( LAYOUTMAIN );
         LAYOUTMAINITEM3.setRow( LAYOUTMAINROW3 );
         LAYOUTMAINITEM3.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTAPPBAR --
         // ------------------------------
         LAYOUTAPPBAR.initialize();

         // ----------------------------------
         // -- Initialize #LAYOUTAPPBARROW1 --
         // ----------------------------------
         LAYOUTAPPBARROW1.setDisplayPosition( 1 );
         LAYOUTAPPBARROW1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARROW1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPBARCOLUMN1 --
         // -------------------------------------
         LAYOUTAPPBARCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPBARCOLUMN1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARCOLUMN1.initialize();

         // -----------------------------------
         // -- Initialize #LAYOUTAPPBARITEM1 --
         // -----------------------------------
         LAYOUTAPPBARITEM1.setAlignment( "CENTERRIGHT" );
         LAYOUTAPPBARITEM1.setColumn( LAYOUTAPPBARCOLUMN1 );
         LAYOUTAPPBARITEM1.setManage( SEARCHICON );
         LAYOUTAPPBARITEM1.setParent( LAYOUTAPPBAR );
         LAYOUTAPPBARITEM1.setRow( LAYOUTAPPBARROW1 );
         LAYOUTAPPBARITEM1.setSizing( "NONE" );
         LAYOUTAPPBARITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LAYOUTAPPDRAWER --
         // ---------------------------------
         LAYOUTAPPDRAWER.initialize();

         // ----------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERCOLUMN1 --
         // ----------------------------------------
         LAYOUTAPPDRAWERCOLUMN1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERCOLUMN1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERCOLUMN1.initialize();

         // -------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERROW1 --
         // -------------------------------------
         LAYOUTAPPDRAWERROW1.setDisplayPosition( 1 );
         LAYOUTAPPDRAWERROW1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERROW1.initialize();

         // --------------------------------------
         // -- Initialize #LAYOUTAPPDRAWERITEM1 --
         // --------------------------------------
         LAYOUTAPPDRAWERITEM1.setColumn( LAYOUTAPPDRAWERCOLUMN1 );
         LAYOUTAPPDRAWERITEM1.setManage( MENU );
         LAYOUTAPPDRAWERITEM1.setParent( LAYOUTAPPDRAWER );
         LAYOUTAPPDRAWERITEM1.setRow( LAYOUTAPPDRAWERROW1 );
         LAYOUTAPPDRAWERITEM1.initialize();

         // ------------------------
         // -- Initialize #APPBAR --
         // ------------------------
         APPBAR.setDisplayPosition( 1 );
         APPBAR.setParent( this );
         APPBAR.setTabPosition( 1 );
         APPBAR.setWidth( 1200 );
         APPBAR.setThemeDrawStyle( "Heading1" );
         APPBAR.setCaption( "My Webserver2" );
         APPBAR.setCaptionMarginBottom( 0 );
         APPBAR.setCaptionMarginRight( 0 );
         APPBAR.setCaptionMarginTop( 0 );
         APPBAR.setIcon( "menu" );
         APPBAR.setLayoutManager( LAYOUTAPPBAR );
         APPBAR.initialize();

         // ----------------------------
         // -- Initialize #SEARCHICON --
         // ----------------------------
         SEARCHICON.setDisplayPosition( 1 );
         SEARCHICON.setIcon( "search" );
         SEARCHICON.setLeft( 1152 );
         SEARCHICON.setParent( APPBAR );
         SEARCHICON.setTabPosition( 1 );
         SEARCHICON.setTop( 4 );
         SEARCHICON.initialize();

         // ---------------------------
         // -- Initialize #APPDRAWER --
         // ---------------------------
         APPDRAWER.setDisplayPosition( 2 );
         APPDRAWER.setParent( this );
         APPDRAWER.setTabPosition( 2 );
         APPDRAWER.setTop( 56 );
         APPDRAWER.setHeight( 744 );
         APPDRAWER.setLayoutManager( LAYOUTAPPDRAWER );
         APPDRAWER.setThemeDrawStyle( "MediumTitle" );
         APPDRAWER.setWidth( 220 );
         APPDRAWER.initialize();

         // ----------------------
         // -- Initialize #MENU --
         // ----------------------
         MENU.setDisplayPosition( 1 );
         MENU.setHeight( 744 );
         MENU.setParent( APPDRAWER );
         MENU.setShowSelection( false );
         MENU.setTabPosition( 1 );
         MENU.setVerticalScroll( true );
         MENU.setWidth( 220 );
         MENU.initialize();

         // ----------------------------------
         // -- Initialize #MENUITEMCONTACTS --
         // ----------------------------------
         MENUITEMCONTACTS.setCaption( "Contacts" );
         MENUITEMCONTACTS.setDisplayPosition( 1 );
         MENUITEMCONTACTS.setLeft( 0 );
         MENUITEMCONTACTS.setParent( MENU );
         MENUITEMCONTACTS.setTabPosition( 1 );
         MENUITEMCONTACTS.setTabStop( false );
         MENUITEMCONTACTS.setTop( 0 );
         MENUITEMCONTACTS.setWidth( 220 );
         MENUITEMCONTACTS.setHeight( 48 );
         MENUITEMCONTACTS.setIcon( "view_quilt" );
         MENUITEMCONTACTS.setView( CONTACTS );
         MENUITEMCONTACTS.initialize();

         // -------------------------------
         // -- Initialize #MENUITEMVIEW2 --
         // -------------------------------
         MENUITEMVIEW2.setCaption( "View2" );
         MENUITEMVIEW2.setDisplayPosition( 2 );
         MENUITEMVIEW2.setLeft( 0 );
         MENUITEMVIEW2.setParent( MENU );
         MENUITEMVIEW2.setTabPosition( 2 );
         MENUITEMVIEW2.setTabStop( false );
         MENUITEMVIEW2.setTop( 48 );
         MENUITEMVIEW2.setWidth( 220 );
         MENUITEMVIEW2.setHeight( 48 );
         MENUITEMVIEW2.setIcon( "view_quilt" );
         MENUITEMVIEW2.setView( VIEW2 );
         MENUITEMVIEW2.initialize();

         // -------------------------------
         // -- Initialize #MENUITEMVIEW3 --
         // -------------------------------
         MENUITEMVIEW3.setCaption( "View3" );
         MENUITEMVIEW3.setDisplayPosition( 3 );
         MENUITEMVIEW3.setLeft( 0 );
         MENUITEMVIEW3.setParent( MENU );
         MENUITEMVIEW3.setTabPosition( 3 );
         MENUITEMVIEW3.setTabStop( false );
         MENUITEMVIEW3.setTop( 96 );
         MENUITEMVIEW3.setWidth( 220 );
         MENUITEMVIEW3.setHeight( 48 );
         MENUITEMVIEW3.setIcon( "view_quilt" );
         MENUITEMVIEW3.setView( VIEW3 );
         MENUITEMVIEW3.initialize();

         // ----------------------------------
         // -- Initialize #MENUITEMSETTINGS --
         // ----------------------------------
         MENUITEMSETTINGS.setCaption( "Settings" );
         MENUITEMSETTINGS.setDisplayPosition( 4 );
         MENUITEMSETTINGS.setLeft( 0 );
         MENUITEMSETTINGS.setParent( MENU );
         MENUITEMSETTINGS.setTabPosition( 4 );
         MENUITEMSETTINGS.setTabStop( false );
         MENUITEMSETTINGS.setTop( 144 );
         MENUITEMSETTINGS.setWidth( 220 );
         MENUITEMSETTINGS.setHeight( 48 );
         MENUITEMSETTINGS.setIcon( "settings" );
         MENUITEMSETTINGS.setThemeDrawStyle( "TopDivider" );
         MENUITEMSETTINGS.setView( SETTINGS );
         MENUITEMSETTINGS.initialize();

         // ---------------------------------
         // -- Initialize #MENUITEMSIGNOUT --
         // ---------------------------------
         MENUITEMSIGNOUT.setCaption( "Sign Out" );
         MENUITEMSIGNOUT.setDisplayPosition( 5 );
         MENUITEMSIGNOUT.setLeft( 0 );
         MENUITEMSIGNOUT.setParent( MENU );
         MENUITEMSIGNOUT.setTabPosition( 5 );
         MENUITEMSIGNOUT.setTabStop( false );
         MENUITEMSIGNOUT.setTop( 192 );
         MENUITEMSIGNOUT.setWidth( 220 );
         MENUITEMSIGNOUT.setHeight( 48 );
         MENUITEMSIGNOUT.setIcon( "exit_to_app" );
         MENUITEMSIGNOUT.initialize();

         // ------------------------------
         // -- Initialize #SEARCHSTRING --
         // ------------------------------
         SEARCHSTRING.setAppearance( "NONE" );
         SEARCHSTRING.setDisplayPosition( 4 );
         SEARCHSTRING.setHeight( 40 );
         SEARCHSTRING.setHelperPosition( "NONE" );
         SEARCHSTRING.setCaptionPosition( "NONE" );
         SEARCHSTRING.setLeft( 220 );
         SEARCHSTRING.setParent( this );
         SEARCHSTRING.setTabPosition( 4 );
         SEARCHSTRING.setTop( 56 );
         SEARCHSTRING.setWidth( 980 );
         SEARCHSTRING.setIcon( "search" );
         SEARCHSTRING.setPlaceholder( "Search" );
         SEARCHSTRING.setThemeDrawStyle( "BottomDivider" );
         SEARCHSTRING.setVisible( false );
         SEARCHSTRING.initialize();

         // -------------------------------
         // -- Initialize #VIEWCONTAINER --
         // -------------------------------
         VIEWCONTAINER.setDisplayPosition( 3 );
         VIEWCONTAINER.setLeft( 220 );
         VIEWCONTAINER.setParent( this );
         VIEWCONTAINER.setTabPosition( 3 );
         VIEWCONTAINER.setTop( 96 );
         VIEWCONTAINER.setHeight( 704 );
         VIEWCONTAINER.setWidth( 980 );
         VIEWCONTAINER.initialize();

         // --------------------------
         // -- Initialize #CONTACTS --
         // --------------------------
         CONTACTS.setHeight( 704 );
         CONTACTS.setLeft( 326 );
         CONTACTS.setParent( VIEWCONTAINER );
         CONTACTS.setWidth( 980 );
         CONTACTS.initialize();

         // -----------------------
         // -- Initialize #VIEW2 --
         // -----------------------
         VIEW2.setHeight( 704 );
         VIEW2.setLeft( 652 );
         VIEW2.setParent( VIEWCONTAINER );
         VIEW2.setWidth( 980 );
         VIEW2.setDisplayPosition( 2 );
         VIEW2.setTabPosition( 2 );
         VIEW2.initialize();

         // -----------------------
         // -- Initialize #VIEW3 --
         // -----------------------
         VIEW3.setHeight( 704 );
         VIEW3.setParent( VIEWCONTAINER );
         VIEW3.setWidth( 980 );
         VIEW3.setDisplayPosition( 3 );
         VIEW3.setTabPosition( 3 );
         VIEW3.setTop( 231 );
         VIEW3.initialize();

         // --------------------------
         // -- Initialize #SETTINGS --
         // --------------------------
         SETTINGS.setDisplayPosition( 4 );
         SETTINGS.setParent( VIEWCONTAINER );
         SETTINGS.setCaption( "Settings" );
         SETTINGS.setHeight( 704 );
         SETTINGS.setWidth( 980 );
         SETTINGS.setLeft( 326 );
         SETTINGS.setTabPosition( 4 );
         SETTINGS.setTop( 231 );
         SETTINGS.initialize();

         // ------------------------
         // -- Initialize #SIGNIN --
         // ------------------------
         SIGNIN.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #SYS_WEB --
         // -------------------------------------
         Lansa.WEB().addEventHandler( "DEVICECHANGED", this, evtRoutine5 );

         // ------------------------------------
         // -- Add Event Handlers for #APPBAR --
         // ------------------------------------
         APPBAR.addEventHandler( "ICONCLICK", this, evtRoutine4 );

         // ----------------------------------------
         // -- Add Event Handlers for #SEARCHICON --
         // ----------------------------------------
         SEARCHICON.addEventHandler( "CLICK", this, evtRoutine6 );

         // ---------------------------------------------
         // -- Add Event Handlers for #MENUITEMSIGNOUT --
         // ---------------------------------------------
         MENUITEMSIGNOUT.addEventHandler( "CLICK", this, evtRoutine2 );

         // ------------------------------------------
         // -- Add Event Handlers for #SEARCHSTRING --
         // ------------------------------------------
         SEARCHSTRING.addEventHandler( "AUTOSUGGEST", this, evtRoutine7 );

         // -------------------------------------------
         // -- Add Event Handlers for #VIEWCONTAINER --
         // -------------------------------------------
         VIEWCONTAINER.addEventHandler( "ACTIVEVIEWCHANGED", this, evtRoutine8 );

         // ------------------------------------
         // -- Add Event Handlers for #SIGNIN --
         // ------------------------------------
         SIGNIN.addEventHandler( "COMPLETED", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setTheme( Lansa.THEME().get( "MATERIALDESIGNBLUE" ) );
         this.setLayoutManager( LAYOUTMAIN );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 57 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 57 );
      {

         //
         // #SignIn.Show
         //
         rtn.Line( 59 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 61 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MenuItemSignOut.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MenuItemSignOut.Click", 63 );

      //
      // DEFINE_COM Class(#WEBSession.SignOut) Name(#SignOut)
      //
      var SIGNOUT = rtn.createDataRequest( "SIGNOUT", "WEBSESSIO", "SIGNOUT" );

      // -------------------------
      // -- Initialize #SIGNOUT --
      // -------------------------
      SIGNOUT.initialize();

      //
      // EVTROUTINE Handling(#MenuItemSignOut.Click)
      //
      rtn.Line( 63 );
      {

         //
         // #SignOut.ExecuteAsync
         //
         rtn.Line( 67 );
         SIGNOUT.mthEXECUTEASYNC( {  }, {  } );

         //
         // #ViewContainer.Clear
         //
         rtn.Line( 69 );
         ref.VIEWCONTAINER.mthCLEAR();

         //
         // #SignIn.Show
         //
         rtn.Line( 71 );
         ref.SIGNIN.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 73 );
      rtn.end();
   };

   //
   // evtRoutine3 - #SignIn.Completed
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SignIn.Completed", 75 );

      //
      // EVTROUTINE Handling(#SignIn.Completed)
      //
      rtn.Line( 75 );
      {

         //
         // #Contacts.Show
         //
         rtn.Line( 77 );
         ref.CONTACTS.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 79 );
      rtn.end();
   };

   //
   // evtRoutine4 - #AppBar.IconClick
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AppBar.IconClick", 81 );

      //
      // EVTROUTINE Handling(#AppBar.IconClick)
      //
      rtn.Line( 81 );
      {

         //
         // #AppDrawer.ToggleDrawer
         //
         rtn.Line( 83 );
         ref.APPDRAWER.mthTOGGLEDRAWER();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 85 );
      rtn.end();
   };

   //
   // evtRoutine5 - #Sys_Web.DeviceChanged
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sys_Web.DeviceChanged", 87 );

      //
      // EVTROUTINE Handling(#Sys_Web.DeviceChanged)
      //
      rtn.Line( 87 );
      {

         //
         // IF (#Sys_Web.Device = Mobile)
         //
         rtn.Line( 89 );
         if ( Lansa.String.eq( Lansa.WEB().getDevice(), "MOBILE" ) )
         {

            //
            // #AppDrawer.DrawerStyle := SlideInLeft
            //
            rtn.Line( 91 );
            ref.APPDRAWER.setDrawerStyle( "SLIDEINLEFT" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #AppDrawer.DrawerStyle := Permanent
            //
            rtn.Line( 95 );
            ref.APPDRAWER.setDrawerStyle( "PERMANENT" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 99 );
      rtn.end();
   };

   //
   // evtRoutine6 - #SearchIcon.Click
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchIcon.Click", 101 );

      //
      // EVTROUTINE Handling(#SearchIcon.Click)
      //
      rtn.Line( 101 );
      {

         //
         // IF (#SearchString <> "")
         //
         rtn.Line( 103 );
         if ( Lansa.String.ne( ref.SEARCHSTRING.get(), "" ) )
         {

            //
            // #SearchString := ""
            //
            rtn.Line( 105 );
            ref.SEARCHSTRING.set( "" );

            //
            // SET Com(#Contacts) Filter(#SearchString)
            //
            rtn.Line( 107 );
            ref.CONTACTS.setFILTER( ref.SEARCHSTRING.get() );

         //
         // ENDIF 
         //
         }

         //
         // #SearchString.Visible := *Not #SearchString.Visible
         //
         rtn.Line( 111 );
         ref.SEARCHSTRING.setVisible( Lansa.not( ref.SEARCHSTRING.getVisible() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 113 );
      rtn.end();
   };

   //
   // evtRoutine7 - #SearchString.AutoSuggest
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SearchString.AutoSuggest", 115 );

      //
      // EVTROUTINE Handling(#SearchString.AutoSuggest)
      //
      rtn.Line( 115 );
      {

         //
         // SET Com(#Contacts) Filter(#SearchString)
         //
         rtn.Line( 117 );
         ref.CONTACTS.setFILTER( ref.SEARCHSTRING.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 119 );
      rtn.end();
   };

   //
   // evtRoutine8 - #ViewContainer.ActiveViewChanged
   //
   function evtRoutine8( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ViewContainer.ActiveViewChanged", 121 );

      //
      // EVTROUTINE Handling(#ViewContainer.ActiveViewChanged)
      //
      rtn.Line( 121 );
      {

         //
         // #SearchString := ""
         //
         rtn.Line( 123 );
         ref.SEARCHSTRING.set( "" );

         //
         // #SearchString.Visible := False
         //
         rtn.Line( 125 );
         ref.SEARCHSTRING.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 127 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "WEBCONTAC", "WEBVIEW2", "WEBVIEW3", "WEBSETTIN", "WEBSIGNIN" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_MD.AppBar", "PRIM_MD.Icon", "PRIM_MD.AppDrawer", "PRIM_MD.Menu", "PRIM_MD.MenuItem", "PRIM_MD.Edit", "PRIM_MD.ViewContainer", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=webmain.js
