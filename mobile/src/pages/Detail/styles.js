import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 48,
    backgroundColor: '#fff',
  },

  incidentProperty: {
    marginTop: 24,
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#13131a',
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380',
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    height: 50,
    width: '48%',
    backgroundColor: '#e02041',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

})