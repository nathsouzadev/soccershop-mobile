import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderStartColor: '#00bb2d',
    width: 150,
    padding: 5,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008000",
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  title: {
    fontSize: 22,
    color: 'white',
    marginBottom: 5
  },
  info: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    borderStartColor: '#00bb2d',
    width: 150,
    padding: 5,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  error: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginTop: 10,
    marginBottom: 15
  },
  navContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  card: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20
  },
  cardContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%", 
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
